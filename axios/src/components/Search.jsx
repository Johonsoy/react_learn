import React, { useState } from 'react';

const App = () => {
    // 搜索框输入状态
    const [query, setQuery] = useState('');
    // 搜索结果
    const [results, setResults] = useState([]);

    // 模拟搜索结果
    const sampleResults = [
        { id: 1, name: 'Item 1', imageUrl: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Item 2', imageUrl: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Item 3', imageUrl: 'https://via.placeholder.com/150' },
        { id: 4, name: 'Item 4', imageUrl: 'https://via.placeholder.com/150' },
    ];

    // 处理搜索功能
    const handleSearch = () => {
        // 这里我们模拟一个搜索结果，实际情况下可以根据输入的 query 过滤数据或者发请求
        const filteredResults = sampleResults.filter(item =>
            item.name.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filteredResults);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>搜索页面</h1>
            {/* 搜索框和按钮 */}
            <div>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="请输入搜索内容"
                    style={{ padding: '10px', fontSize: '16px' }}
                />
                <button
                    onClick={handleSearch}
                    style={{
                        padding: '10px',
                        marginLeft: '10px',
                        fontSize: '16px',
                        cursor: 'pointer'
                    }}
                >
                    搜索
                </button>
            </div>

            {/* 搜索结果展示 */}

        </div>
    );
};

export default App;
