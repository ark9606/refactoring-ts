## Add new types of Movie (2)

We could add classes for each movie type: RegularMovie, ChildrenMovie, NewReleaseMovie.

The type of Movie may be changed during the lifecycle (NewReleaseMovie -> RegularMovie).
But class of object cannot be changed.
So, let's implement the State pattern.
