function skillsMember()
{
  return {
    restrict: 'E',
    templateUrl: 'modules/member/member.html',
    controller: 'MemberController',
    controllerAs: 'vm',
    bindToController: true,
    scope:{
      member: 'm'
    }
  };
}
