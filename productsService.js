const products = [
    {
        id: 1,
        title: "Giuong chau au",
        price: 500,
        thumbnail: "https://gotrangtri.vn/wp-content/uploads/2021/10/giuong-ngu-hien-dai-bang-go-cong-nghiep-cao-cap-ghs-9217-ava.jpg"
    },
    {
        id: 2,
        title: "Giuong chau au",
        price: 500,
        thumbnail: "https://gotrangtri.vn/wp-content/uploads/2021/10/giuong-ngu-hien-dai-bang-go-cong-nghiep-cao-cap-ghs-9217-ava.jpg"
    },
    {
        id: 3,
        title: "Giuong chau au",
        price: 500,
        thumbnail: "https://gotrangtri.vn/wp-content/uploads/2021/10/giuong-ngu-hien-dai-bang-go-cong-nghiep-cao-cap-ghs-9217-ava.jpg"
    },
    {
        id: 4,
        title: "Giuong chau au",
        price: 500,
        thumbnail: "https://gotrangtri.vn/wp-content/uploads/2021/10/giuong-ngu-hien-dai-bang-go-cong-nghiep-cao-cap-ghs-9217-ava.jpg"
    },
    {
        id: 5,
        title: "Giuong chau au",
        price: 500,
        thumbnail: "https://gotrangtri.vn/wp-content/uploads/2021/10/giuong-ngu-hien-dai-bang-go-cong-nghiep-cao-cap-ghs-9217-ava.jpg"
    },
    {
        id: 6,
        title: "Giuong chau au",
        price: 500,
        thumbnail: "https://gotrangtri.vn/wp-content/uploads/2021/10/giuong-ngu-hien-dai-bang-go-cong-nghiep-cao-cap-ghs-9217-ava.jpg"
    }
]

const getProducts = () => {
    return products.map((product, index) => {
        return (`
            <div class="giuong">
                <a href=""><img src="${product.thumbnail}" alt=""></a>
                <br>
                <a href="">${product.title}</a>
                <br>
                <a href="">${"$" + product.price}</a>
                <br>
                <button>Thêm vào giỏ hàng</button>
            </div>
        `)
    })
}

const contentWebProducts = document.querySelector("#content")
const _products = getProducts()

contentWebProducts.innerHTML = _products.join("")
console.log({ contentWebProducts })
