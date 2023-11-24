function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'modules/skills/member.html',
    controller: 'SkillMembercontroller',
    controllerAs: 'vm',
    bindToController: true,
    scope: {
      member: '='
    }
  };
}