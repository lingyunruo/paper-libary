
import React, {Component} from 'react';

import './index.less';

class Table extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            className = ''
        } = this.props;
        return (
            <div
                className={`paper-table ${className}`}
            >   
                
            </div>
        );
    }
}

export default Table;