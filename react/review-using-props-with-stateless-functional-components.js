class CampSite extends React.Component {
    render() {
        return (
            <div>
                <Camper name = "CamperBot"/>
            </div>
        );
    }
};
// Change code below this line
class Camper extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.name}</p> 
            </div>
        )
    }
}

Camper.defaultProps = {
    name: "CamperBot"
}

Camper.propTypes = {name: PropTypes.string.isRequired}