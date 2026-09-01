# Resort_booking_application
Next.js — Resort Booking Application  Developing a resort booking application using Next.js, focused on creating a seamless user experience for discovering resorts, exploring rooms and amenities, checking availability, and making bookings. Working with reusable React components, dynamic routing, API integration, responsive UI.

GIT_COMMANDS
git clone https://github.com/USERNAME/REPO.git
ren resortbookingapp14 resortbookingapp14old3
cd REPO
git status

git checkout main
git pull
git checkout -b MY_BRANCH
git status
git add .
git commit -m "Add user registration"
git push -u origin OFFICE_WORK

git checkout main
git pull
git checkout -b PERSONAL_WORK
git push -u origin PERSONAL_WORK



CLONE
  ↓
CD
  ↓
STATUS
  ↓
CHECKOUT / CREATE BRANCH
  ↓
WRITE CODE
  ↓
ADD .
  ↓
COMMIT
  ↓
PUSH
  ↓
PULL REQUEST
  ↓
MAIN





ROUTES:
AUTH
PRODUCTS
USERS
INDIVIDUAL USER ROUTE
INDIVIDUAL PRODUCT ROUTE






NEXT RESORT PROJECT MAKING :

PAGES USER REGISTRATION
MONGODB CONNECTION 
SAVE USER RECORD IN DB (SERVER ACTIONS )
NEXT AUTH CONFIG 
USER LOGIN 
ADMIN PAGE 
PROJECT COLLECTIONS 
INDIDVIDUAL PRODUCTS 
CALENDER COMPONENT 
USER BOOKINGS RECORDS 
DEPLOYMENT 




1. Create a repository on the github 
2. check the versions for nodejs, npm, nextjs, react, vsccode etc.., 
        node -v
        npm -v
        npm list next
        npm list react
        npm list react-dom
        npm list next-auth
        npm list mongoose
        npm list --depth=0 (for all installed  packages)

3. open a new command terminal 
4. cd to require directory and change the branch by creting new branch 
        git clone -b nextauth https://github.com/avinashyesuri/resortbookingapp14.gi
        cd 
        git branch
        git status 
        git checkout -b OFLAPT_WORK
        git add .
        git commit -m "Office laptop work"
        git push -u origin OFLAPT_WORK

4. create a common route (user)
5. create a component where u can create a form for frontend "component" folder 
6. create a "UTILS" FOLDER
4. create a db connection by  "MONGODB" -- create a project, cluster , connect , drivers , copy the url and change password automtucaly connects but for us its  not connected 
7. create a "db" file inside "utils" folder --- " config " where u will assign connection db with ur prohect
8. create a "models" for database cluster creation
9. create a "server action" file for server side database push 
10. now using the component user registration form we will interlink the server action register for opush the data to databse 
11. Now we import the componet files on to user route 
    /login
    /register
    /admin etc 

13. As we had created a registration form , server action register file -- DB conected , use server , databse entries will be listed 
14. now we shall make a login form , login server action file for this 
    we should have registred user details such as username, useremail etc..,
    now then with login data we get the checks
15. Now we will create admin
    admin will be creaed using through mongo db directly and now we next auth 
16. For that create a structure as shown in the nextauth derivative something like ... 
    create afoldder in app -- api/auth/..
    and fiel from app- auth.js

17. now we will crete "nxet auth"
18. Now we will work on the Routes -- 
            AUTH
            PRODUCTS
            USERS
            INDIVIDUAL USER ROUTE
            INDIVIDUAL PRODUCT ROUTE

19. firstly create a component file admin navbar and addproduct section 
20. 


