import React from 'react';
import {Formik} from "formik";
import yup from "yup";
import Image from "next/image";

class Thumb extends React.Component {
    state = {
        loading: false,
        thumb: undefined,
        file: null
    };

    // eslint-disable-next-line react/no-deprecated
    componentWillReceiveProps(nextProps: any) {
        if (!nextProps.file) {
            return;
        }

        this.setState({loading: true}, () => {
            let reader = new FileReader();

            reader.onloadend = () => {
                this.setState({loading: false, thumb: reader.result});
            };

            reader.readAsDataURL(nextProps.file);
        });
    }

    render() {
        const {file}: any = this.props;
        const {loading, thumb} = this.state;

        if (!file) {
            return null;
        }

        if (loading) {
            return <p>loading...</p>;
        }

        return (
            <Image
                alt={file.name}
                src={`${thumb}`}
                className="img-thumbnail mt-2  object-cover"
                height="200px"
                width="200px"
                objectFit={objectFit}
            />);
    }
}

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Formik
                    initialValues={{file: null}}
                    onSubmit={(values: any) => {
                        alert(
                            JSON.stringify(
                                {
                                    fileName: values.file.name,
                                    type: values.file.type,
                                    size: `${values.file.size} bytes`
                                },
                                null,
                                2
                            )
                        );
                    }}
                    validationSchema={yup.object().shape({
                        file: yup.mixed().required(),
                    })}
                    render={({values, handleSubmit, setFieldValue}) => {
                        return (
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label for="file">File upload</label>
                                    <input id="file" name="file" type="file" onChange={(event: any) => {
                                        setFieldValue("file", event.currentTarget.files[0]);
                                    }} className="form-control"/>
                                    {/* <Thumb file={values.file} /> */}
                                </div>
                                <button type="submit" className="btn btn-primary">submit</button>
                            </form>
                        );
                    }}/>
            </div>
        );
    }
};


