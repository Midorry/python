import { getDownloadURL, uploadBytes, ref } from "firebase/storage";
import { useState } from "react";
import { storage } from "../../firebase";
import { v4 } from "uuid";
import axios from "axios";

const Admin = () => {
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState(0);
    const [productImg, setProductImg] = useState(null);
    const [imageUrls, setImageUrls] = useState("");

    const [error, setError] = useState("");

    const types = ["image/png", "image/jpeg"]; // image types

    const productImgHandler = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile && types.includes(selectedFile.type)) {
            setProductImg(selectedFile);
            setError("");
        } else {
            setProductImg(null);
            setError("Please select a valid image type (jpg or png)");
        }
    };

    // add product
    const addProduct = async () => {
        const id = v4();
        if (productImg == null) return;
        const imageRef = ref(storage, `images/${productImg.name + v4()}`);
        uploadBytes(imageRef, productImg).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageUrls(url);
                console.log(imageUrls);
            });
        });
        // await axios
        //     .get("http://127.0.0.1:5000/product/list")
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     })
        //     .finally(function () {
        //         // always executed
        //     });
        await axios
            .post(
                "http://127.0.0.1:5000/product/add",
                {
                    id: id,
                    name: productName,
                    price: productPrice,
                    image: imageUrls,
                },

                {
                    withCredentials: false,
                    headers: {
                        "Content-Type": "application/json",
                    },
                    accept: "application/json",
                }
            )
            .then(function (response) {
                console.log(response);
                confirm(response.config.data);
            })
            .catch(function (error) {
                console.log(error.response.data);
                console.log(error.response);
                console.log(error);
            });

        // try {
        //     const productRef = collection(db, "product");
        //     await addDoc(productRef, {
        //         name: productName,
        //         price: productPrice,
        //         image: imageUrls,
        //     });
        //     // toast.success("Add product successfully");
        //     // navigate('/admin-dashboard')
        //     // setLoading(false)
        // } catch (error) {
        //     console.log(error);
        //     // setLoading(false)
        //     // toast.error("Add product failed");
        // }
    };
    return (
        <div className="container">
            <br />
            <h2>ADD PRODUCTS</h2>
            <hr />
            <form
                autoComplete="off"
                className="form-group"
                onSubmit={addProduct}
            >
                <label htmlFor="product-name">Product Name</label>
                <input
                    type="text"
                    className="form-control"
                    required
                    onChange={(e) => setProductName(e.target.value)}
                    value={productName}
                />
                <br />
                <label htmlFor="product-price">Product Price</label>
                <input
                    type="number"
                    className="form-control"
                    required
                    onChange={(e) => setProductPrice(e.target.value)}
                    value={productPrice}
                />
                <br />
                <label htmlFor="product-img">Product Image</label>
                <input
                    type="file"
                    className="form-control"
                    id="file"
                    required
                    onChange={productImgHandler}
                />
                <br />
                <button
                    type="button"
                    onClick={addProduct}
                    className="btn btn-success btn-md mybtn"
                >
                    ADD
                </button>
            </form>
            {error ? <span>{error}</span> : ""}
        </div>
    );
};

export default Admin;
