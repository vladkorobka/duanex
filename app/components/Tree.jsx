import TreeNode from "./TreeNode";

const Tree = ({ tree }) => {
  return (
    <ul>
      {tree.map((node, index) => (
        <TreeNode key={index} node={node} />
      ))}
    </ul>
  );
};

export default Tree;
