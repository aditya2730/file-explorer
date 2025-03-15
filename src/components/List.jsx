const List = ({ data, addElementToList, isOpen, setIsOpen, deleteElementFromList }) => {
    return (
        <div className="bg-gray-900 p-2 text-gray-300 w-64 overflow-hidden">
            {data.map((item, index) => (
                <div key={index}>
                    <div
                        className="p-2 hover:bg-gray-700 rounded-md cursor-pointer flex items-center"
                        onClick={() => item.isFolder && setIsOpen((prev) => ({
                            ...prev,
                            [item.id]: !prev[item.id]
                        }))}
                    >
                        {item.isFolder ? (
                            <span className="mr-2">{isOpen[item.id] ? "📂" : "📁"}</span>
                        ) : (
                            <span className="mr-2">📄</span>
                        )}
                        <span>{item.name}</span>
                        {item.isFolder && (
                            <span>
                                <img
                                    src="https://cdn-icons-png.flaticon.com/128/11366/11366824.png"
                                    alt="icon"
                                    className="w-8 m-2"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        addElementToList(item.id);
                                    }}
                                />
                            </span>
                        )}
                        <span>
                            <img src="https://cdn2.iconfinder.com/data/icons/folders-22/512/Folder_Win_Delete.png"
                                alt="icon"
                                className='w-8 ml-2'
                                onClick={(e) => {
                                    e.stopPropagation();
                                    deleteElementFromList(item.id);
                                }} />
                        </span>
                    </div>
                    {isOpen[item.id] && item.children && (
                        <div className="pl-4 border-l border-gray-700">
                            <List
                                data={item.children}
                                addElementToList={addElementToList}
                                isOpen={isOpen}
                                setIsOpen={setIsOpen}
                                deleteElementFromList={deleteElementFromList}
                            />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default List;
