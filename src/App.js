import {MainContainer,NavBar,ProfileCard,ProfileDetail,Typography,Button} from"./App.Styled.js"

function App() {
  return (
    <main>
    <NavBar>

        <div>
        <img src=" " alt="Logo" >
          </img>
        </div>
        <div>
          <input type="text">


          </input>
          <Button fontSize={16} background="#FCDD06">Search</Button>

        </div>
        <div>
        <img src=" " alt="icon1" >
          </img>
        <img src=" " alt="icon2" >
          </img>
        <img src=" " alt="icon3" >
          </img>
          </div>

      </NavBar>
      <MainContainer>
      <ProfileCard>
        <Typography fontSize={32}>
          <img src=" " alt=" " >
          </img>
          Amy Mayer </Typography>
        <Typography fontSize={24}>My Orders</Typography>
        <Typography fontSize={24}>Wishlist</Typography>
        <Typography  fontSize={24}>Notifcations</Typography>
        <Typography  fontSize={24}>Settings</Typography>
        <Button  fontSize={24} fontWeight={300}>Logout</Button>


            </ProfileCard>
            <ProfileDetail>
              <div>
            <Typography fontSize={32}>My Profile </Typography>
        <Typography fontSize={24}>First Name </Typography>
        <Typography fontSize={24}>Last Name</Typography>
        <Typography Typography fontSize={24}>Last Name</Typography>
        <Typography Typography fontSize={24}>Birthday</Typography>
        <Typography Typography fontSize={24}>Logout</Typography>
        <Button fontSize={13} background="#FCDD06">Change Password</Button>
        </div>
        <div>
         <Typography fontSize={32}>My Profile </Typography>
        <Typography fontSize={24}>Amy</Typography>
        <Typography fontSize={24}>Mayer</Typography>
        <Typography Typography fontSize={24}>amymay@gmail.com</Typography>
        <Typography Typography fontSize={24}>12/04/1991</Typography>
        <Typography Typography fontSize={24}>Logout</Typography>
        </div>
        <div>
        <img src=" " alt=" " >
          </img>
          <Button fontSize={13} background="#FCDD06">Upload new photo</Button>

        </div>
            </ProfileDetail>

          </MainContainer>
          </main>
  );
};
export default App;
