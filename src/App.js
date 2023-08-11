import logo from './logo.svg';
import './App.css';
import ClassName from './component/ClassName';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewClass from './component/ViewClass';
import Update from './component/Update';
import Home from './component/Home';
import Student from './component/Student';
// import { Inbox, Subject } from '@mui/icons-material';
import ViewStudent from './component/ViewStudent';
import Edit from './component/Edit';
import Bus from './component/Bus';
import ViewBus from './component/ViewBus';
import UpdateBus from './component/UpdateBus';
import Fee from './component/Fee';
import FeeList from './component/FeeList';
import EditFee from './component/EditFee';
import Teacher from './component/Teacher';
import TeacherList from './component/TeacherList';
import UpdateTeacher from './component/UpdateTeacher';
import Attendence from './component/Attendence';
import AttendenceList from './component/AttendenceList';
import UpdateAttendence from './component/UpdateAttendence';
import Subject from './component/Subject';
import SubjectList from './component/SubjectList';
import EditSubject from './component/EditSubject';

function App() {
  return (
    <div className='App'>
      {/* <ClassName /> */}

      <BrowserRouter>
        {/* <SignUp /> */}
        <Routes>
          <Route path='/className' element={<ClassName />} />
          <Route path='/viewclass' element={<ViewClass />} />
          <Route path='/update/:id' element={<Update />} />
          <Route path='/' element={<Home />} />
          <Route path='/student' element={<Student />} />
          <Route path='/viewStudent' element={<ViewStudent />} />
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='/bus' element={<Bus />} />
          <Route path='/viewBus' element={<ViewBus />} />
          <Route path='/updateBus/:id' element={<UpdateBus />} />
          <Route path='/fee' element={<Fee />} />
          <Route path='/feeList' element={<FeeList />} />
          <Route path='/editFee/:id' element={<EditFee />} />
          <Route path='/teacher' element={<Teacher />} />
          <Route path='/teacherList' element={<TeacherList />} />
          <Route path='/updateTeacher/:id' element={<UpdateTeacher />} />
          <Route path='/attendence' element={<Attendence />} />
          <Route path='/attendenceList' element={<AttendenceList />} />
          {/* <Route path='/updateAttendence/:id' element={<UpdateAttendence />} /> */}
          <Route path='/subject' element={<Subject />} />
          <Route path='/subjectList' element={<SubjectList />} />
          <Route path='/editSubject/:id' element={<EditSubject />} />

          {/* <Route path='/delete' element={<Delete />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
