<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BriefcaseSvelte from '../../../lib/20/solid/briefcase.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: BriefcaseSvelte,
		args: { class: '' },
	})
</script>

<Story name="Briefcase" />
