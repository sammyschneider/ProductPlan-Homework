import React from "react";
class Lane extends React.Component {

  state = {
    modalState: true

}
handleChange = () => {
 this.setState({
   modalState: !this.state.modalState
 })
}
  render = () => {
    return (
      <div>

      <div className={"modal fade" + (this.state.modalState ? " show d-block" : " d-none")} id="basicExampleModal" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog" role="document">

          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button onClick = {this.handleChange} type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body">
              <h3>We'll start with a lane</h3>
              <p>
              Lanes represent high level categories, such as teams, product lines, or strategic initiatives. Add a color and description to your lane to communicate valuable details to stakeholders.
              
              Drag and drop a lane to get started
              </p>
            </div>

            <div className="modal-footer">
              <button onClick = {this.handleChange} type="button" className="btn btn-primary" data-dismiss="modal">Got it</button>

            </div>

          </div>

        </div>
      </div>
      </div>
    )
  }
}


export default Lane;
