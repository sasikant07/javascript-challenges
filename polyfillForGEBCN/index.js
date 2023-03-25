// Polyfill for document.getElementByClassName()

let result = [];

function getElementByClassName(className) {
    function getChildren(node) {
        Object.keys(node.children).forEach(child => {
            let childNode = node.children[child];
            let attr = childNode.getAttribute('class');
            // let attr = childNode.getAttribute('id');     // getElementById
            if (attr == className) {
                result.push(childNode);
            }
            getChildren(childNode);
        })
        return;
    }

    const nodes = document.body;
    getChildren(nodes);
}

getElementByClassName('a');
console.log(result);


// onother type

document.customGetElementByClassName = function(className) {
    const root = this.body;

    function search(node) {
        let result = [];

        if (node.classList.contains(className)) {
            return node;
        }

        for (const element of node.children) {
            result = result.concat(search(element));
        }

        return result;
    }

    return search(root);
}

const res = document.customGetElementByClassName('spn');
console.log(res);