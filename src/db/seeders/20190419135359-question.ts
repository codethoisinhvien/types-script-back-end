'use strict';

module.exports = {
  up: (queryInterface:any, Sequelize:any) => {
    return queryInterface.bulkInsert(
      
      'questions',
      [
        
        {
          id:1,
          subject_id:1,
          content:'Phần mềm gồm',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:2,
          subject_id:1,
          content:'Chọn phát biểu đúng nhất dựa trên những phát biểu sau đây:',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:3,
          subject_id:1,
          content: 'Chọn phát biểu đúng nhất giữa mối quan hệ giữ phần mềm và hệ thống thông tin(HTTP):',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:4,
          subject_id:1,
          content:'Đâu là đặc trưng của một sản phẩm phần mềm',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:5,
          subject_id:1,
          content: 'Các bộ biên dịch (Compilers) và các hệ điều hành thuộc loại phầm mềm nào?',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:6,
          subject_id:1,
          content:'CASE viết tắt của từ gì?',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:7,
          subject_id:1,
          content:'Độ đo nào phản ảnh khả năng dễ học để sử dụng hệ thống phần mềm?',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:8,
          subject_id:1,
          content:'Độ đo nào phản ánh khả năng sửa lỗi và phục hồi lỗi của phầm mềm?',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },
        {
          id:9,
          subject_id:1,
          content:'Độ đo nào phản ánh khả năng sửa lỗi và phục hồi lỗi của phầm mềm?',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

         {
          id:10,
          subject_id:1,
          content:'Độ đo nào phản ánh khả năng thay đổi/nâng cấp của hệ thống phần mềm?',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:11,
          subject_id:1,
          content:'Độ đo nào phản ánh khả năng đưa ra kết quả trong một thời gian xử lý và một tốc độ thông lượng hợp lý của hệ thống phần mềm?',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:12,
          subject_id:1,
          content:'Độ đo nào phản ánh khả năng có thể cung cấp một tập các chức năng thích hợp cho công việc cụ thể phục vụ mục đích của người sử dụng?',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:13,
          subject_id:1,
          content:'Độ đo nào phản ánh khả năng có thể thích nghi với nhiều môi trường khác nhau mà không cần phải thay đổi phần mềm?',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:14,
          subject_id:1,
          content:'Phần mềm bị thay đổi/tiến hóa trong trường hợp nào?',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:15,
          subject_id:1,
          content:'Phần mềm có thể bị thay đổi/tiến hóa trong giai đoạn nào?',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:16,
          subject_id:1,
          content:'Hoạt động ước lượng nào sau đây mà kết quả ước lượng được đo bằng KLOC hoặc số điểm chức năng (function points) của sản phẩm phần mềm?',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:17,
          subject_id:1,
          content:'Tài liệu nào được tạo ra bởi quá trình phân tích sau khi các yêu cầu đã được thu thập bởi các bên liên quan?',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:18,
          subject_id:1,
          content:'Tài liệu nào được sử dụng như là một công cụ giao tiếp quan trọng nhất giữa các nhóm phát triển phần mềm?',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:19,
          subject_id:1,
          content:'Đặc trưng nào được sử dụng để quyết định phạm vi của phần mềm?',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:20,
          subject_id:1,
          content:'Đâu là mục tiêu chính của kỹ nghệ phần mềm (SE)?',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:21,
          subject_id:1,
          content:'Đâu là mục tiêu chính của kỹ nghệ phần mềm (SE)?',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:22,
          subject_id:1,
          content:'Một dự án phát triển phầm mềm là thất bại khi:',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:23,
          subject_id:1,
          content:'Một dự án phát triển phầm mềm là thất bại khi:',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          id:24,
          subject_id:1,
          content:'Agile: điều quan trọng hơn là xây dựng phần mềm đáp ứng được nhu cầu hiện tại của khách hàng hơn là lo lắng về các tính năng cần thiết trong tương lai.',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:25,
          subject_id:1,
          content:'Độ đo nào phản ánh khả năng thay đổi/nâng cấp của hệ thống phần mềm?Phát triển lặp và tăng dần (iterative, incremental development) đều được vận dụng trong RUP.',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:26,
          subject_id:1,
          content:'Mô hình hóa hướng đối tượng không được vận dụng trong RUP.',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:27,
          subject_id:1,
          content:'Đâu là vấn đề của các phương pháp Agile?',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:28,
          subject_id:1,
          content:'Khách hàng nên tham gia như thế nào trong các phương pháp Agile?',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:29,
          subject_id:1,
          content:'Đâu là mục tiêu của các phương pháp Agile?',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:30,
          subject_id:1,
          content:'Đâu là sự tham gia vào kiểm thử của khách hàng trong Extreme Programming (XP)?',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:31,
          subject_id:1,
          content:'Cái nào KHÔNG PHẢI tuyên ngôn của Agile?',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:32,
          subject_id:1,
          content:'Đâu KHÔNG PHẢI một trong những câu hỏi mấu chốt được trả lời bởi mỗi thành viên tại mỗi cuộc họp Scrum',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:33,
          subject_id:1,
          content:'Trong Scrum, công việc được ưu tiên làm được nhắc đến dưới tên gọi:',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:34,
          subject_id:1,
          content:'Đâu là bốn hoạt động khung của mô hình qui trình Extreme Programming (XP)?',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:35,
          subject_id:1,
          content:'Các cuộc họp Scrum được khuyến nghị tổ chức với tần suất nào?',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:36,
          subject_id:1,
          content:'Người hay những người chịu trách nhiệm theo dõi và cập nhật cho Scrum (tương đương với người quản lý dự án) còn được gọi là ...',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:37,
          subject_id:1,
          content:'Các quy trình Agile dựa trên:',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:38,
          subject_id:1,
          content:'RUP là viết tắt của ... và được phát triển bởi ...',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:39,
          subject_id:1,
          content:'RUP định nghĩa 4+1 views, như được liệt kê dưới đây:',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },
        {
          id:40,
          subject_id:1,
          content:'Chế tác (artifact) là gì?',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:41,
          subject_id:1,
          content:'Quy trình nào yêu cầu lập trình đôi (pair programming)?',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:42,
          subject_id:1,
          content:'Quy trình nào chứa các pha Inception, Elaboration, Construction, & Transition?',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:43,
          subject_id:1,
          content:'Điều gì KHÔNG đúng về TDD?',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },
        {
          id:44,
          subject_id:1,
          content:'Cái nào không thuộc Agile?',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:45,
          subject_id:1,
          content:'Quy trình nào sử dụng sprints?',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:46,
          subject_id:1,
          content:'Quy trình nào chứa các bước theo thứ tự sau: viết test, viết code, thực hiện tests thành công, và cấu trúc lại mã.',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


      ],
      {}
    );
  },

  down: (queryInterface:any, Sequelize:any) => {
    return queryInterface.bulkDelete('questions', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  
  }
};
