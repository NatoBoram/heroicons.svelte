<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BriefcaseSvelte from '../../../lib/24/outline/briefcase.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: BriefcaseSvelte,
		args: { class: '' },
	})
</script>

<Story name="Briefcase" />
