'use strict';

module.exports = {
  up: (queryInterface:any, Sequelize:any) => {
    return queryInterface.bulkInsert(
      'question_answers',
      [
        {
          question_id:1,
          answer_id:1,
          right:true,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:1,
          answer_id:2,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },
        
        {
          question_id:1,
          answer_id:3,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:1,
          answer_id:4,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:2,
          answer_id:5,
          right:true,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:2,
          answer_id:6,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:2,
          answer_id:7,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:3,
          answer_id:8,
          right:true,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:3,
          answer_id:9,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:3,
          answer_id:10,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:3,
          answer_id:11,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:4,
          answer_id:12,
          right:true,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:4,
          answer_id:13,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:4,
          answer_id:14,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:4,
          answer_id:15,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:5,
          answer_id:16,
          right:true,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:5,
          answer_id:17,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },
        {
          question_id:5,
          answer_id:18,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },
        {
          question_id:5,
          answer_id:19,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:6,
          answer_id:20,
          right:true,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:6,
          answer_id:21,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:6,
          answer_id:22,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:6,
          answer_id:23,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:7,
          answer_id:24,
          right:true,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:7,
          answer_id:25,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          question_id:7,
          answer_id:26,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:7,
          answer_id:27,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          question_id:8,
          answer_id:28,
          right:true,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:8,
          answer_id:29,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          question_id:8,
          answer_id:30,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          question_id:8,
          answer_id:31,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:9,
          answer_id:32,
          right:true,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          question_id:9,
          answer_id:33,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          question_id:9,
          answer_id:34,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:9,
          answer_id:35,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          question_id:10,
          answer_id:36,
          right:true,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          question_id:10,
          answer_id:37,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          question_id:10,
          answer_id:38,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          question_id:10,
          answer_id:39,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:11,
          answer_id:40,
          right:true,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:11,
          answer_id:41,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:11,
          answer_id:42,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:11,
          answer_id:43,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:12,
          answer_id:44,
          right:true,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:12,
          answer_id:45,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:12,
          answer_id:46,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:12,
          answer_id:47,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          question_id:13,
          answer_id:48,
          right:true,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:13,
          answer_id:49,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          question_id:13,
          answer_id:50,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          question_id:13,
          answer_id:51,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:14,
          answer_id:52,
          right:true,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },
        {
          question_id:14,
          answer_id:53,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          question_id:14,
          answer_id:54,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:14,
          answer_id:55,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:15,
          answer_id:56,
          right:true,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:15,
          answer_id:57,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:15,
          answer_id:58,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:15,
          answer_id:59,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          question_id:16,
          answer_id:60,
          right:true,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:16,
          answer_id:61,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          question_id:16,
          answer_id:62,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:16,
          answer_id:63,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          question_id:17,
          answer_id:64,
          right:true,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:17,
          answer_id:65,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:17,
          answer_id:66,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:17,
          answer_id:67,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          question_id:18,
          answer_id:68,
          right:true,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          question_id:18,
          answer_id:69,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:18,
          answer_id:70,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:18,
          answer_id:71,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          question_id:19,
          answer_id:72,
          right:true,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:19,
          answer_id:73,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          question_id:19,
          answer_id:74,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          question_id:19,
          answer_id:75,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:20,
          answer_id:76,
          right:true,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:20,
          answer_id:77,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:20,
          answer_id:78,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          question_id:20,
          answer_id:79,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },
        {
          question_id:21,
          answer_id:80,
          right:true,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          question_id:21,
          answer_id:81,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:21,
          answer_id:82,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:21,
          answer_id:83,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },
        {
          question_id:22,
          answer_id:84,
          right:true,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:22,
          answer_id:85,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:22,
          answer_id:86,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:22,
          answer_id:87,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:24,
          answer_id:88,
          right:true,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:24,
          answer_id:89,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:25,
          answer_id:90,
          right:true,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:25,
          answer_id:91,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:26,
          answer_id:92,
          right:true,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:26,
          answer_id:93,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:27,
          answer_id:94,
          right:true,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:27,
          answer_id:95,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:27,
          answer_id:96,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:28,
          answer_id:97,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:28,
          answer_id:98,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:28,
          answer_id:99,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:29,
          answer_id:100,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          question_id:29,
          answer_id:101,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:29,
          answer_id:102,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          question_id:30,
          answer_id:103,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:30,
          answer_id:104,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          question_id:30,
          answer_id:105,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          question_id:31,
          answer_id:106,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          question_id:31,
          answer_id:107,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          question_id:31,
          answer_id:108,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          question_id:32,
          answer_id:109,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          question_id:32,
          answer_id:110,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:32,
          answer_id:111,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          question_id:33,
          answer_id:112,
          right:true,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          question_id:33,
          answer_id:113,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          question_id:33,
          answer_id:114,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:34,
          answer_id:115,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          question_id:34,
          answer_id:116,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          question_id:34,
          answer_id:117,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:35,
          answer_id:118,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },


        {
          question_id:35,
          answer_id:119,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:35,
          answer_id:120,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },
        {
          question_id:36,
          answer_id:121,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:36,
          answer_id:122,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:36,
          answer_id:123,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:37,
          answer_id:124,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:37,
          answer_id:125,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        {
          question_id:37,
          answer_id:126,
          right:false,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),
        },

        

      ],
      {},
      {}
    );

  },

  down: (queryInterface:any, Sequelize:any) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
