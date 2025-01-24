<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import AcademicCapSvelte from '../../../lib/20/solid/academic-cap.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: AcademicCapSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="AcademicCap" />
