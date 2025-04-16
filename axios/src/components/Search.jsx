import React, {Component, useState} from 'react';


class  Search extends Component {
    // 处理搜索功能
    handleSearch = () => {
        const sampleResults = [
            {id: 1, name: 'Item 1', imageUrl: 'https://img2.baidu.com/it/u=1137101923,166953968&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'},
            {id: 2, name: 'Item 2', imageUrl: 'https://img2.baidu.com/it/u=1137101923,166953968&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'},
            {id: 3, name: 'Item 3', imageUrl: 'https://img2.baidu.com/it/u=1137101923,166953968&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'},
            {id: 4, name: 'Item 4', imageUrl: 'https://img2.baidu.com/it/u=1137101923,166953968&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'},
        ]
        // 这里我们模拟一个搜索结果，实际情况下可以根据输入的 query 过滤数据或者发请求
        const filteredResults = sampleResults.filter(item =>
            item.name.toLowerCase().includes(this.state.query.toLowerCase())
        );
        this.props.saveUsers(filteredResults);
    };

    setQuery = (value) => {
        this.setState({ query: value });
    }

    render() {

        return (
            <div style={{padding: '20px'}}>
                <h1>搜索页面</h1>
                {/* 搜索框和按钮 */}
                <div>
                    <input
                        type="text"
                        onChange={(e) => this.setQuery(e.target.value)}
                        placeholder="请输入搜索内容"
                        style={{padding: '10px', fontSize: '16px'}}
                    />
                    <button
                        onClick={this.handleSearch}
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
            </div>
        );
    }
}

export default Search;
