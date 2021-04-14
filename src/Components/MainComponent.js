import Menu from './MenuComponent';
import { Component } from 'react';
import DishdetailComponent from'./DishdetailComponent';
import Header from './Header';
import Footer from './Footer';
import Home from './HomeComponent';
import About from './AboutusComponent';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom'
import Contact from './ContactComponent';
import {connect} from 'react-redux';
import {addComment} from '../redux/ActionCreaters';

//withRouter is needed to connect to redux

const mapStoreToprops=state =>{
  return {
    dishes:state.dishes,
    comments:state.comments,
    promotions:state.promotions,
    leaders:state.leaders
  }
}

const mapDispatchToProps = (dispatch) =>({
  addComment:(dishId,rating,author,comment)=>{
    dispatch(addComment(dishId,rating,author,comment))
  }
});

class MainComponent extends Component{
  constructor(props){
    super(props);  
  }

  
  
  onDishSelect(dishId){
    this.setState({selectedDish:dishId});
    }


    
render(){
  const HomePage = ()=>{
    return(
      <Home dish = {this.props.dishes.filter((dish)=>dish.featured)[0]}
       promotion = {this.props.promotions.filter((promotion)=>promotion.featured)[0]}
       leader = {this.props.leaders.filter((leader)=>leader.featured)[0]}
       />
      );
  }

  const DishWithId=({match})=>{
    return(
      <DishdetailComponent dish = {this.props.dishes.filter((dish)=>dish.id=== parseInt(match.params.dishId,10))[0]}
      comments ={this.props.comments.filter((comment)=>comment.dishId ===parseInt(match.params.dishId,10))}
      addComment = {this.props.addComment}
      />
      
      );
  }

  return (
    <div >
      <Header/>
      <Switch>
          <Route path="/home" component={HomePage}/>
          <Route exact path="/menu" component={()=><Menu dishes = {this.props.dishes}/>}/>
          <Route path ="/menu/:dishId" component = {DishWithId}/>
          <Route path = "/aboutus" component = {()=><About leaders = {this.props.leaders}/>}/>
          <Route exact path="/contactus" component={Contact}/>
          <Redirect to="/home"/>
      </Switch>    
      <Footer/>
        </div>
  );
}
}

export default withRouter(connect(mapStoreToprops,mapDispatchToProps)(MainComponent));
