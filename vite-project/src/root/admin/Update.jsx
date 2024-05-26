import { getDownloadURL, uploadBytes, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from "../../firebase";
import { v4 } from "uuid";
import axios from "axios";
import { useParams } from "react-router-dom";

const Update = () => {
    const [currentProduct, setCurrentProduct] = useState({});
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState(0);
    const [productImg, setProductImg] = useState(null);
    const [imageUrls, setImageUrls] = useState("");

    const [error, setError] = useState("");

    const types = ["image/png", "image/jpeg"]; // image types

    const id = useParams();
    console.log(id);

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

    async function getProduct() {
        try {
            const response = await axios.get(
                `http://127.0.0.1:5000/product/list?id=${id.id}`
            );
            setCurrentProduct(response.data);
            setProductName(currentProduct.name);
            setProductPrice(currentProduct.price);
            setProductImg(currentProduct.image);
            console.log(response.data);
            console.log(response);
            console.log(currentProduct);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getProduct();
    }, []);

    // add product
    const uploadProduct = async () => {
        if (productImg == null) return;
        const imageRef = ref(storage, `images/${productImg.name + v4()}`);
        await uploadBytes(imageRef, productImg).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageUrls(url);
                console.log(imageUrls);
            });
        });
        await axios
            .post(
                `http://127.0.0.1:5000/product/update?id=${id.id}`,
                {
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
    };
    return (
        <div className="container">
            <br />
            <h2>UPDATE PRODUCTS</h2>
            <hr />
            <form
                autoComplete="off"
                className="form-group"
                onSubmit={uploadProduct}
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
                <p>Current Image</p>
                <img width="380" src={`${currentProduct.image}`}></img>
                <br />
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
                    onClick={uploadProduct}
                    className="btn btn-success btn-md mybtn"
                >
                    ADD
                </button>
            </form>
            {error ? <span>{error}</span> : ""}
        </div>
    );
};

export default Update;
