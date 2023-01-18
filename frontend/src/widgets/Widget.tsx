import { connect } from "react-redux";
import { widget } from "../types";
import Chat from "./chatOverlay/ChatOverlay";

const Widget = (props:any) => {
    const widget = props.widget as widget;

    switch(widget.type){
        case "chatOverlay":
            return <Chat style={widget.style} twitch={props.twitch}/>
    }
}

function mapStateToProps(state:any) {
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