// router.get("/api/byDepartment", (req, res) => {
//     db.DepartmentCrew.findAll({
//       include: db.Item
  
//     })
//       .then((itemsByDepartment) => {
//         console.log(itemsByDepartment);
    
//         res.render("itemsByDepartment", { departmentItems: itemsByDepartment});
//       })
//       .catch((err) => {
//         console.log(err);
//         res.status(500).json({
//           error: true,
//           data: null,
//           message: "unable to retrive allDepartmentCrew",
//         });
//       });
//   });