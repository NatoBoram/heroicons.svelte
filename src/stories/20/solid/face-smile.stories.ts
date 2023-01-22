import type { Meta, StoryObj } from '@storybook/svelte'
import FaceSmileSvelte from '../../../lib/20/solid/face-smile.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: FaceSmileSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<FaceSmileSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const FaceSmile: Story = {}
