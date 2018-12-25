import React from 'react';
import Link from './Link'

const Footer = () => (
    <p>
        Show:
        <Link active={true}>ALL</Link>
        &nbsp;&nbsp;
        <Link active={false}>Active</Link>
        &nbsp;&nbsp;
        <Link active={false}>Completed</Link>
    </p>
)

export default Footer