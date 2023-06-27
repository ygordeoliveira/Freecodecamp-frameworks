// Change code above this line
const styles = {
    color: "purple",
    fontSize: 40,
    border: "2px solid purple",
};

class Colorful extends React.Component {
    render() {
        // Change code below this line
        return (
            <div style={{color: styles.color, fontSize: styles.fontSize, border: styles.border}}>Style Me!</div>
        );
        // Change code above this line
    }
};