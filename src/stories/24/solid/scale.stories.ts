import type { Meta, StoryObj } from '@storybook/svelte'
import { Scale as ScaleSvelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: ScaleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ScaleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Scale: Story = {}
