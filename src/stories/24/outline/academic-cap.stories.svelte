<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import AcademicCapSvelte from '../../../lib/24/outline/academic-cap.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: AcademicCapSvelte,
		args: { class: '' },
	})
</script>

<Story name="AcademicCap" />
