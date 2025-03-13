import { useState } from "react";

const List = ({ data }) => {
    const [isOpen, setIsOpen] = useState({});

    return (
        <div className="bg-gray-900 p-2 text-gray-300 w-64 overflow-hidden">
            {data.map((item, index) => (
                <div key={index}>
                    <div
                        className="p-2 hover:bg-gray-700 rounded-md cursor-pointer flex items-center"
                        onClick={() => item.isFolder && setIsOpen((prev) => {
                            return { ...prev, [item.name]: !prev[item.name] }
                        })}
                    >
                        {item.isFolder ? (
                            <span className="mr-2">{isOpen?.[item.name] ? "📂" : "📁"}</span>
                        ) : (
                            <span className="mr-2">📄</span>
                        )}
                        <span>{item.name}</span>
                    </div>
                    {isOpen?.[item.name] && item.children && (
                        <div className="pl-4 border-l border-gray-700">
                            <List data={item.children} />
                        </div>
                    )}
                </div>
            ))
            }
        </div >
    );
};

export default List;

