<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import VariableSvelte from '../../../lib/24/outline/variable.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: VariableSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Variable" />
