import type { Meta, StoryObj } from '@storybook/svelte'
import { Camera as CameraSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: CameraSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CameraSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Camera: Story = {}