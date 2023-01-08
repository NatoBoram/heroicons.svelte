import type { Meta, StoryObj } from '@storybook/svelte'
import { Scale as ScaleSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: ScaleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ScaleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Scale: Story = {}
