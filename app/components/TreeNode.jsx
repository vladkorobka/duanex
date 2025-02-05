import { useEffect, useState } from "react";
import Image from "next/image";

const FILE = "/icons/file.png";
const FOLDER = "/icons/folder.png";
const EMPTY_FOLDER = "/icons/empty_folder.png";

const TreeNode = ({ node }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [icon, setIcon] = useState(FILE);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (node.subitems) {
      const isSubitems = node.subitems.some((item) => item.subitems);
      isSubitems ? setIcon(FOLDER) : setIcon(EMPTY_FOLDER);
    } else {
      node.name.includes(".") ? setIcon(FILE) : setIcon(EMPTY_FOLDER);
    }
  }, []);

  if (node.subitems) {
    return (
      <li style={{ listStyle: "none" }}>
        <span onClick={toggleOpen} style={{ cursor: "pointer" }}>
          <Image src={icon} alt="icon" width={14} height={14} /> {node.name}
        </span>
        {isOpen && node.subitems && (
          <ul style={{ marginLeft: "1rem" }}>
            {node.subitems.map((subNode, index) => (
              <TreeNode key={index} node={subNode} />
            ))}
          </ul>
        )}
      </li>
    );
  }

  return (
    <li style={{ listStyle: "none" }}>
      <Image src={icon} alt="icon" width={14} height={14} /> {node.name}
    </li>
  );
};

export default TreeNode;
