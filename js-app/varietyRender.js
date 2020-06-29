
const varietyContainer = document.getElementById("mainContainer")

const render = (list) => {
    const content = `
        <div class="list">
            ${
        list.map(i => {
            return `
                        <div class="item">
                            <h3>Variety: ${i.name}</h3>
                            <p>Region: ${i.region}</p>
                            ${i.notes ? `<p>Notes: ${i.notes}</p>` : ''}
                        </div>
                    `
        }).join("")
        }
        </div>
    `

    varietyContainer.innerHTML = content
}

export default render