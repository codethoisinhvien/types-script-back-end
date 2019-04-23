'use strict';

module.exports = {
  up: (queryInterface:any, Sequelize:any) => {
    return queryInterface.bulkInsert(
      'answers',
      [
        {
          id:1,
          content:'Cả 3 đều đúng',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },
        {
          id:2,
          content:'Chương trình máy tính',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },
        {
          id:3,
          content:'Cấu trúc dữ liệu (ngoài và trong)',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },
        {
          id:4,
          content:'Tài liệu',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:5,
          content:'Phầm mềm là sản phẩm được các kỹ sư phần mềm thiết kế và xây dựng',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:6,
          content:'Phần mềm là một phần tử logic',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },
        
        {
          id:7,
          content:'Phần mềm là một tập các ứng dụng được xây dựng bởi các kỹ sư phần mềm',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:8,
          content:'HTTT gồm phần cứng và cơ sở hạ tầng mạng truyền thông, phần mềm, dữ liệu, con người và các quy trình đảm bảo HTTT được sử dụng hiệu quả và có khả năng bảo trì.',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:9,
          content:'HTTT là về phần cứng và cơ sở hạ tầng mạng truyền thông.Phần mềm là một phần tử logic',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:10,
          content:'HTTT chính là tên gọi khác của phần mềm.',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:11,
          content:'HTTT là một thành phần quan trọng của phần mềm',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:12,
          content:'Cả 3 đều đúng',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },
              
        {
          id:13,
          content:'Không được phát triển theo khuôn mẫu có sẵn',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:14,
          content:'Không bị thoái hóa như phần cứng và các thiệt bị vật lý khác',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:15,
          content:'Phức tạp, vô hình, được phát triển theo nhóm và thường xuyên bị thay đổi',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:16,
          content:'Phầm mềm hệ thống',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:17,
          content:'Phần mềm ứng dụng',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:18,
          content:'Phần mềm tiện ích',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:19,
          content:'Phần mềm khoa học kỹ thuật',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:20,
          content:'Computer Aided Software Engineering',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:21,
          content:'Component Aided Software Engineering',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:22,
          content:'Computer Analysis Software Engineering',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:23,
          content:'Computer Adviced Software Engineering',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {  id:24,
          content:'Độ tin cậy',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {  id:25,
          content:'Dễ bảo trì',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },
        

        {
          id:26,
          content:'Tính hiệu quả',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:27,
          content:'Dễ sử dụng',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          id:28,
          content:'Đầy đủ chức năng',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:29,
          content:'Tính khả chuyển',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          id:30,
          content:'Tất cả đều đúng',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:31,
          content:'Khi yêu cầu nhiệm vụ bị thay đổi',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          id:32,
          content:'Khi lỗi phát sinh',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:33,
          content:'Khi môi trường vận hành của phần mềm bị thay đổi',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:34,
          content:'Bất cứ khi nào trong quá trình phát triển và vận hành ',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:35,
          content:'Chỉ xảy ra trong quá trình phát triển ',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:36,
          content:'Chỉ xảy ra trong quá trình vận hành bảo trì',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },
        {
          id:37,
          content:'Chỉ xảy ra trong quá trình phân tích và đặc tả yêu cầu',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },
        {
          id:38,
          content:'Ước lượng kích thước/kích cỡ của phần mềm',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },
        {
          id:39,
          content:'ước lượng thời gian hoàn thành',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },
        {
          id:40,
          content:'Ước lượng số ngày dùng',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },
        {
          id:41,
          content:'Ước lượng chi phí',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },
        {
          id:42,
          content:'Tài liệu đăc tả yêu cầu',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },
        {
          id:43,
          content:'Tài liệu thu thập yêu cầu',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },
        {
          id:44,
          content:'Tài liệu nghiên cứu khả thi',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },
        {
          id:45,
          content:'Tài liệu thẩm định yêu cầu',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },
        {
          id:46,
          content:'Tài liệu đặc tả yêu cầu',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },
        {
          id:47,
          content:'Tài liệu hướng dẫ sử dụng',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },
        {
          id:48,
          content:'Tài liệu thiết kế',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },
        {
          id:49,
          content:'Tài liệu kiểm thử',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },
        {
          id:50,
          content:'Mục tiêu, chức năng và hiệu quả hệ thống',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },
        {
          id:51,
          content:'Hiệu quả hệ thống',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:52,
          content:'Ngữ cảnh bài toán',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },
        {
          id:53,
          content:'Không có đáp án nào là đúng',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },
        {
          id:54,
          content:'Phần mềm có chất lượng cao, thời gian phát triển nhanh và chi phí hợp lý',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },
        {
          id:55,
          content:'Phần mềm có độ tin cậy cao, thời gian phát triển nhanh và chi phí hợp lý',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },
        {
          id:56,
          content:'Phần mềm có độ tin cậy cao',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },
        {
          id:57,
          content:'Phần mềm có chi phí hợp lý',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },
        {
          id:58,
          content:'Là quá trình tồn tại của phần mềm từ khi khách hàng có nhu cầu phát triển đến khi nó bị bỏ đi',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },
        {
          id:59,
          content:'Là quá trình phát triển phần mềm',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:60,
          content:'Là quá trình vận hành và bảo trì phần mềm',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:61,
          content:'Là quá trình phân tích thiết kế phần mềm',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:62,
          content:'Cả 3 đều đúng',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:63,
          content:'Không đủ tính năng hoặc đủ nhưng khó sử dụng',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:64,
          content:'Vượt quá kinh phí dự kiến',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:65,
          content:'Vượt quá thời gian dự kiến',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:66,
          content:'Đúng',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:67,
          content:'Sai',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:68,
          content:'Để duy trì sự đơn giản cần làm thêm việc',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:69,
          content:'Dễ dàng duy trù hứng thú của khách hàng',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:70,
          content:'Quá nhiều tài liệu ',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          id:71,
          content:'Khách hàng nên tham gia chặt chẽ trong suốt quá trình phát triển',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          id:72,
          content:'Khách hàng tham gia một cách trực tiếp trước khi bắt đầu phát triển',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          id:73,
          content:'Họ cung cấp các yêu cầu phần mềm mới trong quá trình kiểm thử',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          id:74,
          content:'Giảm overheads (phí tổn phát sinh) trong qui trình phần mềm',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          id:75,
          content:'Tăng số lượng khách hàng sẽ dùng phần mềm này',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:76,
          content:'Tăng khả năng an ninh cho phần mềm',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          id:77,
          content:'Khách hàng là một phần của đội phát triển sẽ tham gia viết test trong khi dự án tiếp tục tiến triển',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          id:78,
          content:'Khách hàng tham gia vào pha kiểm thử cuối',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:79,
          content:'Khách hàng làm việc full-time với đội phát triển như là 1 lập trình viên',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          id:80,
          content:'Tài liệu dễ hiểu quan trọng hơn phần mềm chạy được',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:81,
          content:'Cá nhân và tương tác quan trọng hơn qui trình và công cụ',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          id:82,
          content:'Hợp tác của khách hàng quan trọng hơn thương thảo hợp đồng',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:83,
          content:'Bạn đã làm được gì hôm  nay?',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:84,
          content:'Bạn đang gặp trở ngại nào?',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:85,
          content:'Bạn làm gì kể từ lần họp cuối?',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          id:86,
          content:'Bạn đã làm được gì hôm  nay?',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:87,
          content:'Tồn đọng sản phẩm (Product backlog)',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:88,
          content:'Lập lịch Sprint (Sprint planning)',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:89,
          content:'Nhìn lại Sprint (Sprint retrospective)',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },
        {
          id:90,
          content:'Lập lịch, thiết kế, mã hóa, kiểm thử',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:91,
          content:'Lập lịch, phân tích, mã hóa, kiểm thử',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },
        {
          id:92,
          content:'Lập lịch, phân tích, thiết kế, mã hóa',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },
        {
          id:93,
          content:'Hàng ngày',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:94,
          content:'2 lần một ngày (sáng và chiều)',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:95,
          content:'Hàng tuần',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:96,
          content:'Scrum Master',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:97,
          content:'Chủ sản phẩm',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:98,
          content:'General Manager',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:99,
          content:'Phương án A và B',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          id:100,
          content:'Phát triển lặp (iterative development)',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:101,
          content:'Phát triển tăng dần (incremental development)',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:102,
          content:'Rational Unified Process, IBM',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:103,
          content:'Rational Unified Program, IBM',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:104,
          content:'Rational Unified Process, Microsoft',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:105,
          content:'Use case view, logical view, implementation view, process view and deployment view.',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:106,
          content:'Use case view, analysis view, design view, deployment view, implementation view.',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:107,
          content:'Use case view, conceptual view, module view, code view, execution view.',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:108,
          content:'Cả 2 đều đúng',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          id:109,
          content:'Mô hình (model), mã (code), tài liệu (document)',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:110,
          content:'Sản phẩm được cung cấp bởi một nhiệm vụ của đội dự án,đầu vào hay đầu ra của một hoạt động',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:111,
          content:'Agile/XP',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:112,
          content:'UP/RUP',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:113,
          content:'TDD',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          id:114,
          content:'UP/RUP',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:115,
          content:'Agile',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          id:116,
          content:'TDD',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },
        
        {
          id:117,
          content:'Cung cấp mã chất lượng kém',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:118,
          content:'Rút ngắn thời gian nhận phản hồi từ khách hàng',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:119,
          content:'Cung cấp bằng chứng cụ thể cho thấy phần mềm hoạt động như thế nào',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:120,
          content:'Waterfall',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },
        {
          id:121,
          content:'Clean Software Development',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:122,
          content:'Feature Driven Development',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:123,
          content:'Agile/Scrum',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:124,
          content:'UP/RUP',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:125,
          content:'TDD',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:126,
          content:'UP/RUP',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          id:127,
          content:'Agile',
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        }
      ],
      {}
    );
  },

  down: (queryInterface:any, Sequelize:any) => {
    return queryInterface.bulkDelete('answers', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
