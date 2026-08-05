<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import VariableSvelte from '../../../lib/16/solid/variable.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: VariableSvelte,
		args: { class: '' },
	})
</script>

<Story name="Variable" />
