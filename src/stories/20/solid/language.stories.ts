import type { Meta, StoryObj } from '@storybook/svelte'
import LanguageSvelte from '../../../lib/20/solid/language.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: LanguageSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<LanguageSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Language: Story = {}
