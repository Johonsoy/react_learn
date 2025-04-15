import React, {Component} from 'react';
import './List.css'


class List extends Component {
    render() {
        const {results} = this.props;
        return (
            <div style={{ marginTop: '20px' }}>
                {results.length > 0 ? (
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {results.map(result => (
                            <li key={result.id} style={{ marginBottom: '20px' }}>
                                <img
                                    src={result.imageUrl}
                                    alt={result.name}
                                    style={{ width: '150px', height: '150px' }}
                                />
                                <div style={{ marginTop: '10px', textAlign: 'center' }}>
                                    <h3>{result.name}</h3>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>没有找到相关结果</p>
                )}
            </div>
        )
    }
}

export default List;