import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Show = () => {
    const [listProduct, setListProduct] = useState([]);
    async function getAllProduct() {
        try {
            const response = await axios.get(
                "http://127.0.0.1:5000/product/list"
            );
            setListProduct(response.data);
            console.log(response.data);
            console.log(response);
            console.log(listProduct);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getAllProduct();
    }, []);

    return (
        <div>
            <table
                width="1109"
                border="1"
                align="center"
                cellPadding="0"
                cellSpacing="0"
            >
                <tr>
                    <td
                        width="212"
                        style={{
                            backgroundColor: "#FF9900",
                            textAlign: "center",
                        }}
                    >
                        ID
                    </td>
                    <td
                        width="212"
                        style={{
                            backgroundColor: "#FF9900",
                            textAlign: "center",
                        }}
                    >
                        TÊN SẢN PHẨM
                    </td>
                    <td
                        width="150"
                        style={{
                            backgroundColor: "#FF9900",
                            textAlign: "center",
                        }}
                    >
                        GIÁ
                    </td>
                    <td
                        width="165"
                        style={{
                            backgroundColor: "#FF9900",
                            textAlign: "center",
                        }}
                    >
                        HÌNH ẢNH
                    </td>
                    {/* <td width="209" style={{ backgroundColor: "#FF9900",
                            textAlign: "center", }}>
                        TRẠNG THÁI
                    </td>
                    <td width="100" style={{ backgroundColor: "#FF9900",
                            textAlign: "center", }}>
                        NHÓM SẢN PHẨM
                    </td> */}
                    <td
                        width="172"
                        style={{
                            backgroundColor: "#FF9900",
                            textAlign: "center",
                        }}
                    >
                        XỬ LÝ
                    </td>
                </tr>
                {listProduct?.map((product, index) => (
                    <tr key={index}>
                        <td style={{ textAlign: "center" }}>{product.id}</td>
                        <td style={{ textAlign: "center" }}>{product.name}</td>
                        <td style={{ textAlign: "center" }}>{product.price}</td>
                        <td style={{ textAlign: "center" }} align="center">
                            <img src={`${product.image}`} width="80" />
                        </td>
                        <td style={{ textAlign: "center" }}>
                            <NavLink to={`/update/${product.id}`}>Sửa</NavLink>-
                            <button
                                onClick={() =>
                                    axios
                                        .delete(
                                            `http://127.0.0.1:5000/product/delete?id=${product.id}`
                                        )
                                        .then(() =>
                                            // console.log("Delete successful")
                                            window.location.reload()
                                        )
                                }
                            >
                                Xóa
                            </button>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    );
};

export default Show;
