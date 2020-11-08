var serialize = function (root) {
    if (root == null) {
        return 'X,'
    }
    const leftSerialized = serialize(root.left);
    const rightSerialized = serialize(root.right);
    return root.val + ',' + leftSerialized + rightSerialized;
};

var deserialize = function (data) {
    const list = data.split(',');
    const buildTree = (list) => {
        const rootVal = list.shift();
        if (rootVal == 'X') {
            return null;
        }
        const root = new TreeNode(rootVal);
        root.left = buildTree(list);
        root.right = buildTree(list);
        return root;
    }
    return buildTree(list);
};