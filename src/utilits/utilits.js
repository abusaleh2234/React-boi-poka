const getStoredBook = () => {
    const storedBookStr = localStorage.getItem("readList")

    if (storedBookStr) {
        const storedBookData = JSON.parse(storedBookStr)
        return storedBookData
    }
    else {
        return []
    }
}

const addStoredBook = (id) => {
    const storedBook = getStoredBook()

    if (storedBook.includes(id)) {
        alert("This book is already exist")
    }
    else {
        storedBook.push(id)
        const data = JSON.stringify(storedBook)
        localStorage.setItem("readList", data)
    }
}

export { addStoredBook ,getStoredBook}