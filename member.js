function skillsMember(){
    return{
        restrict: 'E',
        templateUrl: 'templates/members.html',
        controller: 'MemberController',
        controllerAs: 'memberCtrl',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}