import React from 'react';

const styles = {
    box: {
        width: '100%',
        backgroundColor: '#e9ecef',
        padding: '4rem 2rem',
        textAlign: 'center',
        fontSize: '2.5rem',
        fontWeight: 500,
        color: '#5a5a5a',
        marginBottom: '50px'
    } as React.CSSProperties
};

type Props = {
    // title: string;
    // subtitle: string;
    text: string;
    description?: string;
};
export default function Banner (props: Props) {
    // renderBanner = () => {
    //     return (
    //         <div>
    //             <h1>{props.title}</h1>
    //             <p>{props.subtitle}</p>
    //             <p>
    //                 {/* <a href="#">Primary Button</a> */}
    //                 {/* <a href="#">Secondary Button</a> */}
    //             </p>
    //         </div>
    //     );
    // };

    return (
        <div style={styles.box}>
            {props.text}
            {props.description}
        </div>
    );
}
