# 3D Development

## Fundamental Concepts

1. **Scene:** It's the canvas/place where the 3D world exists & the interactions happen
1. **Renderer:** It converts the 3D scene into 2D images to be displayed on the screen.
1. **Camera:** It defines the viewpoint from which the scene is being viewed. Properties of Camera:

    1. Position
    1. Rotation
    1. FoV (Field of View)

    Special cameras provided by Three.JS:

    1. Perspective: Mimics Human-Eye Perception
    1. Orthographic: Scene view without perspective; great for Graphs, Games, etc.

1. **Lights:** It illuminates the scene & affects the appearance of the objects. Properties of Lights:

    1. Color
    1. Intensity
    1. Position

    Three JS have different types of lights:

    1. Ambient: Illuminates the Scene without a specific Direction
    1. Directional: Light from a specific direction
    1. Pont: Emit light from a point to every direction
    1. Spot: Emits light to a specific direction in a cone-shape

1. **Mesh:** Basic building block for 3D objects. It consists of vertices that are connected to form faces. It defines the shape & Appearance of an object in 3D Space. It's associated with:
    1. Geometry: Structure & Shape of object defined using vertices & faces.
    1. Material: It determines the appearance of the object like texture, color & the way it behaves with light.
