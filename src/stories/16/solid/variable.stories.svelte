<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import VariableSvelte from '../../../lib/16/solid/variable.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: VariableSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Variable" />
