import React from 'react';

import {
  Box,
  CardMedia,
  Grid
} from '@material-ui/core';

class HelpPage extends React.Component {
  render() {
    return (
      <div className="HelpPage">
        <Box pt={2}>
          <Grid container
            spacing={2}
            alignItems="center"
          >
            <Grid item
              xs={8}
            >
              <h4>
                Help section 1
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus metus orci, sed scelerisque ante congue ut. Vivamus eu justo metus. In lorem eros, molestie eget enim vitae, egestas lacinia augue. Mauris quis mi urna. Cras in lorem posuere, fringilla ligula eu, ullamcorper sem. In suscipit imperdiet dui. Praesent cursus sem consectetur metus lobortis venenatis.
              </p>
              <p>
                Integer scelerisque mauris vel felis sagittis gravida. Nulla elementum enim ut lacus scelerisque, eget aliquet quam varius. Donec tristique risus erat, tempor imperdiet ipsum porttitor ac. Ut quis tellus et mi bibendum gravida in in sapien. Morbi lobortis fermentum gravida. Maecenas a feugiat lorem. Donec facilisis dolor dui, ut bibendum est condimentum non. Nullam pretium diam lacus, at malesuada lacus iaculis sed. Cras malesuada erat augue, id finibus elit laoreet eu. Donec sit amet hendrerit sapien. Quisque efficitur ipsum eu lectus rhoncus dapibus. Nulla pretium erat nec tortor semper, quis elementum dolor aliquet.
              </p>
            </Grid>
            <Grid item
              xs={4}
            >
              <CardMedia
                component="img"
                src="https://placekitten.com/300/200"
              />
            </Grid>
          </Grid>
          <Grid container
            spacing={2}
            alignItems="center"
          >
            <Grid item
              xs={8}
            >
              <h4>
                Help section 2
              </h4>
              <p>
                Praesent id neque finibus, porttitor ligula sagittis, auctor dolor. Sed sodales ligula eget mi volutpat, id interdum massa auctor. Sed volutpat diam vel erat porttitor cursus. Praesent gravida erat nulla, vel semper turpis consectetur eu. Ut accumsan porttitor mi a euismod. Sed ut quam massa. Quisque ullamcorper tortor sed enim laoreet condimentum. Aenean feugiat convallis hendrerit. Nulla sit amet nisi nec erat pulvinar egestas. Cras tincidunt libero vel ex auctor placerat. In dolor ante, porta rutrum leo sed, luctus iaculis lorem. In malesuada orci in nulla gravida sollicitudin non nec tortor.
              </p>
              <p>
                Phasellus laoreet elit tellus, a viverra tortor eleifend vitae. Nulla semper lectus non pharetra fermentum. Phasellus diam turpis, gravida at gravida eu, lacinia a lacus. Mauris sit amet nunc velit. Suspendisse a ex ante. Maecenas cursus ligula auctor, volutpat nunc at, sollicitudin justo. Proin ut tempor est, sit amet vulputate velit. Cras iaculis, nisi non porta eleifend, magna turpis finibus nisl, in faucibus odio nisi vel massa. Quisque id orci nec mi pretium mattis. Vivamus luctus risus augue, vel dapibus quam sollicitudin non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget quam et leo condimentum dignissim vel vitae ipsum. Pellentesque risus libero, posuere sit amet pulvinar ut, tempor a ex. Aliquam pharetra non massa quis tincidunt. Fusce accumsan elementum nisl ut dapibus. Aenean id pharetra enim, ac blandit lectus.
              </p>
            </Grid>
            <Grid item
              xs={4}
            >
              <CardMedia
                component="img"
                src="https://placekitten.com/g/300/200"
              />
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }
};

export default HelpPage;
