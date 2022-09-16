import Header from './Header';
import Home from './Home';
import About from './Pages/About';
import Footer from './Footer';
import ContactUs from './ContactUs';
import ReplyContactUs from './ReplyContactUs';
import Homepage from './Pages/Homepage';
import Internship from './Pages/Internship';
import FAQ from './FAQ';
import Phd from './Pages/Phd';
import Techses from './Pages/Techses';
import Insurance from './Pages/Insurance';
import Searchs from './Pages/Searchs';
import Bachelor from './Pages/Bachelor';
import Scholarships from './Pages/Scholarships';
import Masters from './Pages/Masters';
import TeacherDetail from './TeacherDetail';

// Users
import Login from './User/Login';
import Logout from './User/Logout';
import DashBoard from './User/DashBoard';
import VerifyStudent from './User/VerifyStudent';
import MyCourses from './User/MyCourses';
// import RecommendedCourses from './User/RecommendedCourses';
import Register from './User/Register';
import ProfileSetting from './User/ProfileSetting';
import ChangePassword from './User/ChangePassword';
import CourseDetails from './CourseDetail';
import Search from './Search';

// Teachers
import TeacherCourses from './Teacher/TeacherCourses';
import TeacherLogin from './Teacher/TeacherLogin';
import ForgetPassword from './Teacher/ForgetPassword';
import ForgetChangePassword from './Teacher/ForgetChangePassword';
import VerifyTeacher from './Teacher/VerifyTeacher';
import TeacherLogout from './Teacher/TeacherLogout';
import TeacherUsers from './Teacher/TeacherUsers';
import UserList from './Teacher/UserList';
import TeacherRegister from './Teacher/TeacherRegister';
// import TeacherAddCourses from './Teacher/TeacherAddCourses';
import AddCourse from './Teacher/AddCourse';
import EditCourse from './Teacher/EditCourse';
import EnrolledStudents from './Teacher/EnrolledStudents';
import AddChapter from './Teacher/AddChapter';
import AllChapters from './Teacher/CourseChapters';
import EditChapter from './Teacher/EditChapter';
import TeacherDashBoard from './Teacher/TeacherDashBoard';
import TeacherSideBar from './Teacher/TeacherSideBar';
import TeacherProfileSetting from './Teacher/TeacherProfileSetting';
import TeacherPassword from './Teacher/TeacherPassword';

// List Pages
import AllCourses from './AllCourses';
import PopularCourses from './PopularCourses';
import PopularTeachers from './PopularTeachers';
import CategoryCourses from './CategoryCourses';


import {Routes as Switch, Route} from 'react-router-dom'
import Research from './Pages/Research';
import Techs from './Pages/Techses';
import TandC from './Pages/TandC';
import LI from './Pages/LI';

function Main() {
  return (
    <div className="App">
      <Header/>

        <Switch>
          {/* User */}
          <Route path='/home' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/detail/:course_id' element={<CourseDetails/>} />
          <Route path='/search/:searchstring' element={<Search/>} />
          <Route path='/teacher-detail/:teacher_id' element={<TeacherDetail/>} />

          {/* Users */}
          <Route path='/user-login' element={<Login/>} />
          <Route path='/logout' element={<Logout/>} />
          <Route path='/user-register' element={<Register/>} />
          <Route path='/verify-user/:student_id' element={<VerifyStudent/>} />
          <Route path='/user-dashboard' element={<DashBoard/>} />
          <Route path='/my-courses' element={<MyCourses/>} />
          {/* <Route path='/recommended-courses' element={<RecommendedCourses/>} /> */}
          <Route path='/profile-setting' element={<ProfileSetting/>} />
          <Route path='/change-password' element={<ChangePassword/>} />

          {/* Teacher */}
          <Route path='/teacher-mycourses' element={<TeacherCourses/>} />
          <Route path='/enrolled-students/:course_id' element={<EnrolledStudents/>} />
          <Route path='/user-list' element={<UserList/>} />
          <Route path='/teacher-login' element={<TeacherLogin/>} />
          <Route path='/teacher-forget-password' element={<ForgetPassword/>} />
          <Route path='/teacher-change-password/:teacher_id' element={<ForgetChangePassword/>} />
          <Route path='/verify-teacher/:teacher_id' element={<VerifyTeacher/>} />
          <Route path='/teacher-logout' element={<TeacherLogout/>} />
          <Route path='/teacher-users' element={<TeacherUsers/>} />
          {/* <Route path='/teacher-addcourses' element={<TeacherAddCourses/>} /> */}
          <Route path='/add-course' element={<AddCourse/>} />
          <Route path='/edit-course/:course_id' element={<EditCourse/>} />
          <Route path='/add-chapter/:course_id' element={<AddChapter/>} />
          <Route path='/teacher-register' element={<TeacherRegister/>} />
          <Route path='/teacher-dashboard' element={<TeacherDashBoard/>} />
          <Route path='/edit-chapter/:chapter_id' element={<EditChapter/>} />
          <Route path='/teacher-sidebar' element={<TeacherSideBar/>} />
          <Route path='/teacher-profilesetting' element={<TeacherProfileSetting/>} />
          <Route path='/teacher-password' element={<TeacherPassword/>} />

          {/* List Pages */}
          <Route path='/all-courses' element={<AllCourses/>} />
          <Route path='/tandc' element={<TandC/>} />
          <Route path='/li' element={<LI/>} />
          <Route path='/bachelor' element={<Bachelor/>} />
          <Route path='/insurance' element={<Insurance/>} />
          <Route path='/scholarship' element={<Scholarships/>} />
          <Route path='/techses' element={<Techses/>} />
          <Route path='/research' element={<Research/>} />
          <Route path='/faq' element={<FAQ/>} />
          <Route path='/masters' element={<Masters/>} />
          <Route path='/phd' element={<Phd/>} />
          <Route path='/' element={<Homepage/>} />
          <Route path='/intern' element={<Internship/>} />
          <Route path='/searchs' element={<Searchs/>} />
          <Route path='/contact-us' element={<ContactUs/>} />
          <Route path='/reply-contact-us' element={<ReplyContactUs/>} />
          <Route path='/all-chapters/:course_id' element={<AllChapters/>} />
          <Route path='/popular-courses' element={<PopularCourses/>} />
          <Route path='/popular-teachers' element={<PopularTeachers/>} />
          <Route path='/category/:category_slug' element={<CategoryCourses/>} />
        </Switch>
      <Footer/>
    </div>
  );
}

export default Main;
