import { connect } from "react-redux";
import { widget } from "../types";
import Chat from "./chatOverlay/ChatOverlay";
import { state } from "../redux/reduxTypes";

const Widget = (props:any) => {
    const widget = props.widget as widget;
    console.log(widget);

    switch(widget?.type){
        case "chatOverlay":
            return <Chat style={widget.style} twitch={props.twitch}/>
    }
}

function mapStateToProps(state:state) {
    return {
        widget: state.config.widget,
        twitch: state.twitch
    }
}

function mapDispatchToProps(dispatch:any) {
    return {
        
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Widget);