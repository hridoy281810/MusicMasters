
export const selectClass = async (selectData) => {
    const res = await fetch(`http://localhost:5000/selected`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(selectData)
    })
    const data = await res.json()
    return data;
}
