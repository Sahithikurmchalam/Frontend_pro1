import React from 'react';
import {Card,CardBody,Breadcrumb,BreadcrumbItem,CardImg,CardText,CardTitle} from 'reactstrap';
import {Link} from 'react-router-dom';
import CommentForm from './CommentForm';
    function RenderDish({dish}){
        if(dish!=null){
            return(
                <div className="className='col-12 col-md-5 m-1'">
                <Card>
                    <CardImg width="100%" src={dish.image} alt = {dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
            );
        }
        else{
            return(
                <div></div>
            )
        }
    }

    function RenderComments({comments, addComment, dishId}){
        if (comments == null) {
            return (<div></div>)
        }
        const cmnts = comments.map(comment => {
            return (
                
                <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>-- {comment.author},
                &nbsp;
                {new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: '2-digit'
                }).format(new Date(comment.date))}
                </p>
            </li>
                
            )
        })
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {cmnts}

                </ul>
                <CommentForm dishId ={dishId} addComment = {addComment}/>

            </div>
        )
    }

    
    const DishdetailComponent =(props)=>{   
        if (props.dish == null) {
            return (<div></div>);
        }
        const dishComment = <RenderComments comments = {props.comments}
        addComment = {props.addComment} dishId = {props.dish.id}/>
        return(
            <div className="container">
            <div className="row">
            <Breadcrumb>
                <BreadcrumbItem><Link to = "/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                </div>
                </div>
                <div className="row">
                    <RenderDish dish = {props.dish}/>
                    {dishComment}
                    
                </div>
                 
            </div>
        );
    
        }

export default DishdetailComponent;